import selectablePage from '../pageObjects/selectablePage';

describe('Selectable Grid Test', () => {

    it('should select correct items', () => {

        selectablePage.visit();
        selectablePage.clickGrid();

        // clicks
        selectablePage.clickItem('Two');
        selectablePage.clickItem('Four');
        selectablePage.clickItem('Six');
        selectablePage.clickItem('Eight');

        // pārbaude selected
        selectablePage.validateSelected('Two');
        selectablePage.validateSelected('Four');
        selectablePage.validateSelected('Six');
        selectablePage.validateSelected('Eight');

        // pārbaude NOT selected
        selectablePage.validateNotSelected('One');
        selectablePage.validateNotSelected('Three');
        selectablePage.validateNotSelected('Five');
        selectablePage.validateNotSelected('Seven');
        selectablePage.validateNotSelected('Nine');
    });

});