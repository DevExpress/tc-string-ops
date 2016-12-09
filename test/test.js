import { Selector } from 'testcafe';

fixture `Test string operations`
    .page `http://localhost:1337`;

const form            = Selector('form');
const textInput       = form.find('input[type=text]');
const reverseBtn      = form.find('button').withText('Reverse string');
const hashBtn         = form.find('button').withText('Hash');
const resultContainer = Selector('#result');

test('Reverse string', async t => {
    await t
        .typeText(textInput, 'Hi there!')
        .click(reverseBtn)
        .expect(resultContainer.textContent).eql('!ereht iH');
});