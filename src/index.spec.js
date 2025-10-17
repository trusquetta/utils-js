import test from 'ava';
import {camelToKebab, kebabToCamel} from './index.js';

test('camelToKebab:dryrun', t => {
	// const response = camelToKebab('myInput');
	// t.log(response); // <-- 結果をログ出力
	t.is(camelToKebab('myInput'), 'my-input'); // 実行エラーさえ出なければ合格
	t.is(camelToKebab('myInputText'), 'my-input-text'); // 実行エラーさえ出なければ合格
	t.is(camelToKebab('myInputTextAbcde'), 'my-input-text-abcde'); // 実行エラーさえ出なければ合格
});

test('kebabToCamel:dryrun', t => {
	t.is(kebabToCamel('my-input'), 'myInput');
	t.is(kebabToCamel('my-input-text'), 'myInputText');
	t.is(kebabToCamel('my-input-text-abcde'), 'myInputTextAbcde');
});
