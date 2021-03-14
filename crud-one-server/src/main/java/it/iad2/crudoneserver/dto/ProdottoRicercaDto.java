package it.iad2.crudoneserver.dto;

import it.iad2.crudoneserver.model.Prodotto;

public class ProdottoRicercaDto {
    private Prodotto prodotto;
    private String criterio;

    public ProdottoRicercaDto() {
    }

    public ProdottoRicercaDto(Prodotto prodotto, String criterio) {
        this.prodotto = prodotto;
        this.criterio = criterio;
    }

    public Prodotto getProdotto() {
        return prodotto;
    }

    public void setProdotto(Prodotto prodotto) {
        this.prodotto = prodotto;
    }

    public String getCriterio() {
        return criterio;
    }

    public void setCriterio(String criterio) {
        this.criterio = criterio;
    }

    @Override
    public String toString() {
        return "ProdottoRicercaDto{" + "prodotto=" + prodotto + ", criterio=" + criterio + '}';
    }
    
    
}
