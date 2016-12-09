import { Selector } from 'testcafe';

fixture `Test string operations`
    .page `http://localhost:1337`;

const result     = Selector('#result');
const form       = Selector('form');
const textInput  = form.find('input[type=text]');
const reverseBtn = form.find('button').withText('Reverse string');
const hashBtn    = form.find('button').withText('Hash');

test('Reverse string', async t => {
    await t
        .typeText(textInput, 'Hi there!')
        .click(reverseBtn)
        .expect(result.textContent).eql('!ereht iH');
});

test('Get string hash', async t => {
    await t
        .typeText(textInput, 'Thanks for all the fish')
        .click(hashBtn)
        .expect(result.textContent).eql('cb22738ce963f968e30d58b7efc09e1c');
});