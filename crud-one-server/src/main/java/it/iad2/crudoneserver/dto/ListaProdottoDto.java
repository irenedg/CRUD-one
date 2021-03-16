package it.iad2.crudoneserver.dto;

import it.iad2.crudoneserver.model.Prodotto;
import java.util.List;

public class ListaProdottoDto {
    private List<Prodotto> listaProdotto;

    public ListaProdottoDto() {
    }

    public ListaProdottoDto(List<Prodotto> listaProdotto) {
        this.listaProdotto = listaProdotto;
    }

    public List<Prodotto> getListaProdotto() {
        return listaProdotto;
    }

    public void setListaProdotto(List<Prodotto> listaProdotto) {
        this.listaProdotto = listaProdotto;
    }

    @Override
    public String toString() {
        for (Prodotto prodotto : listaProdotto) {
            System.out.println("prodotto: " + prodotto.getCodice() + " " + prodotto.getDescrizione());
        }
        return "ListaProdottoDto{" + "listaProdotto=" + listaProdotto + '}';
    }
}
