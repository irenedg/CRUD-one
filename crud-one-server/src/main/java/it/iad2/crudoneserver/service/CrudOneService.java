package it.iad2.crudoneserver.service;

import it.iad2.crudoneserver.dto.ListaProdottoDto;
import it.iad2.crudoneserver.model.Prodotto;

public interface CrudOneService {

    ListaProdottoDto aggiungi(Prodotto dto);

    ListaProdottoDto modifica(Prodotto dto, String criterio);

    ListaProdottoDto rimuovi(Prodotto dto, String criterio);

    ListaProdottoDto ricerca(String criterio);

    ListaProdottoDto selezionaTutti();

}
