package it.iad2.crudoneserver.controller;

import it.iad2.crudoneserver.dto.CriterioRicercaDto;
import it.iad2.crudoneserver.dto.ListaProdottoDto;
import it.iad2.crudoneserver.dto.ProdottoDto;
import it.iad2.crudoneserver.dto.ProdottoRicercaDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import it.iad2.crudoneserver.service.CrudOneService;

@CrossOrigin("*")
@RestController
public class CrudOneController {

    @Autowired
    CrudOneService crudoneService;

    @RequestMapping("/aggiungi")
    @ResponseBody
    public ListaProdottoDto aggiungi(@RequestBody ProdottoDto dto) {
        return crudoneService.aggiungi(dto.getProdotto());
    }
    
    @RequestMapping("/modifica")
    @ResponseBody
    public ListaProdottoDto modifica(@RequestBody ProdottoRicercaDto dto) {
        return crudoneService.modifica(dto.getProdotto(), dto.getCriterio());
    }
    
    @RequestMapping("/rimuovi")
    @ResponseBody
    public ListaProdottoDto rimuovi(@RequestBody ProdottoRicercaDto dto) {
        return crudoneService.rimuovi(dto.getProdotto(), dto.getCriterio());
    }
    
    @RequestMapping("/ricerca")
    @ResponseBody
    public ListaProdottoDto ricerca(@RequestBody CriterioRicercaDto dto) {
        return crudoneService.ricerca(dto.getStringa());
        
    }
    
    @RequestMapping("/visualizza-lista")
    @ResponseBody
    public ListaProdottoDto visualizzaLista() {
        return crudoneService.selezionaTutti();
    }
}
