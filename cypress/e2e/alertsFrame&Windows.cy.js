import pInicial from "../support/pages/paginaInicial";
import afw from "../support/pages/alertsFrame&Windows";
describe('Alerts, Frames & Windows', () => {
    it('teste automatizado da aba Alerts, Frames & Windows', () => {
        pInicial.visitaSite();
        pInicial.cards();
        afw.visitaafw();
        cy.navegaMenu([["Alerts, Frame & Windows"], ["Browser Windows"]]);
        afw.btnNewWindow();
    });
});