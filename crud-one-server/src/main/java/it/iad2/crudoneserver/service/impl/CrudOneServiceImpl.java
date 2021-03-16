package it.iad2.crudoneserver.service.impl;

import it.iad2.crudoneserver.dto.ListaProdottoDto;
import it.iad2.crudoneserver.model.Prodotto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import it.iad2.crudoneserver.service.CrudOneService;
import it.iad2.crudoneserver.repository.ProdottoRepository;

@Service
public class CrudOneServiceImpl implements CrudOneService {

    @Autowired
    ProdottoRepository prodottoRepository;

    @Override
    public ListaProdottoDto aggiungi(Prodotto prodotto) {
        prodottoRepository.save(prodotto);
        return selezionaTutti();
    }

    @Override
    public ListaProdottoDto modifica(Prodotto prodotto, String criterio) {
        prodottoRepository.save(prodotto);
        return ricerca(criterio);
    }

    @Override
    public ListaProdottoDto rimuovi(Prodotto prodotto, String criterio) {
        prodottoRepository.delete(prodotto);
        return ricerca(criterio);
    }

    @Override
    public ListaProdottoDto ricerca(String criterio) {
        return new ListaProdottoDto(prodottoRepository.findByCodiceContainsOrDescrizioneContains(criterio, criterio));

    }

    @Override
    public ListaProdottoDto selezionaTutti() {
        return new ListaProdottoDto(prodottoRepository.findAll()); 
    }

}
