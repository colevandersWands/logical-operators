{ console.log('--- || ---')


console.log('--- develop test cases ---')

  const strict_cases = [
  
  ];
  function strict_equality(_a, _b) {
    return _a || _b
  }
  run_tests(strict_equality, strict_cases);

console.log('--- replicated && ---')

  function strict_replication(_a, _b) {
    let result;
    // replicate the behavior of ||
    return result
  }
  run_tests(strict_replication, strict_cases)









// testing utils
  function run_tests(_target, _cases, _log) {
    for (let t_case of _cases) {
      let expected = t_case.expected;

      let actual;
      let msg;
      let log;
      if (_log) {
        log = _target(... t_case.args, true);
        actual = log.result;
      } else {
        actual = _target(... t_case.args, false);
      };

      let pass;
      if (typeof expected === 'object') {
        actual = JSON.stringify(actual);
        expected = JSON.stringify(expected);
        pass = actual === expected;
      } else {
        pass = actual === expected;
      };

      if (!pass && _log) {
        console.log(`    ${t_case.name}: \n` + 
            "actual: ", log, "\n" +
            `expected: {${typeof expected}, ${expected}}`);
      } else if (!pass) {
        console.log(`${t_case.name}: \n` + 
            `   actual: {${typeof actual}, ${actual}} \n` +
            `   expected: {${typeof expected}, ${expected}}`);
      };
    };
  };
}