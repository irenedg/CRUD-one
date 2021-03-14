package it.iad2.crudoneserver.service;

import it.iad2.crudoneserver.dto.CriterioRicercaDto;
import it.iad2.crudoneserver.dto.ListaProdottoDto;
import it.iad2.crudoneserver.model.Prodotto;

public interface CrudOneService {

    ListaProdottoDto aggiungi(Prodotto dto);

    ListaProdottoDto modifica(Prodotto dto);

    ListaProdottoDto rimuovi(Prodotto dto);

    ListaProdottoDto ricerca(String criterio);

    ListaProdottoDto visualizzaLista(Prodotto dto);

}
