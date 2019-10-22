// var casper = require('casper').create();コメントインするとエラーになる

// urlを開く
casper.start('http://127.0.0.1:5500/index.html');

casper.thenEvaluate(function() {
  // フォームをサブミットしてチェックボックスをクリック
  $('input[type="text"]').val('foo');
  $('form').submit();
  $('li input[type="checkbox"]').click();
});

// 状態の検証
casper.then(function() {
  this.test.assertEvalEquals(function() {
    return $('li').length;
  }, 1, 'Added Todo List');

  this.test.assertEvalEquals(function() {
    return $('li').text();
  }, 'foo', 'Added input value');

  this.test.assertEvalEquals(function() {
    return $('li').attr('class');
  }, 'complete', 'Added complete class');
});

casper.run(function() {
  this.test.done();
  this.test.renderResults(true);
});
