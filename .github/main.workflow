workflow "Pipeline" {
  on = "push"
  resolves = ["I lint my code", "I test my code", "I deploy my code"]
}

action "I lint my code" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "echo LINTY FRESH"
}

action "I test my code" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "echo TESTED GREAT"
}

action "I deploy my code" {
  needs = ["I lint my code", "I test my code"]
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  runs = "aws swf list-activity-types"
}

