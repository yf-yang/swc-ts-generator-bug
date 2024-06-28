function* test() {
  while (!False()) {
    // execute this line
    while (!False()) {
      // execute this line
      if (False()) {
        // noop
      } else {
        // execute this line
        break;
      }
    }
    // execute this line
    if (False()) {
      break;
    }

    while (False()) {
      yield "unreachable";
    }

    // execute this line
    yield "correct";
    return;
  }
  yield "wrong";
  return;
}

function False() {
  return false;
}

for (const result of test()) {
  console.log(result);
}
