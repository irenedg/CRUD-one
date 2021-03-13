package it.iad2.crudoneunoserver.controller;

import it.iad2.crudoneunoserver.dto.ListaProdottoDto;
import it.iad2.crudoneunoserver.dto.ProdottoDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import it.iad2.crudoneunoserver.service.CrudOneService;

@CrossOrigin("*")
@RestController
public class CrudOneController {

    @Autowired
    CrudOneService crudoneService;

    @RequestMapping("/aggiungi")
    @ResponseBody
    public ListaProdottoDto aggiungi(@RequestBody ProdottoDto dto) {
        throw new UnsupportedOperationException();
    }
    
    @RequestMapping("/modifica")
    @ResponseBody
    public ListaProdottoDto modifica(@RequestBody ProdottoDto dto) {
        throw new UnsupportedOperationException();
    }
    
    @RequestMapping("/rimuovi")
    @ResponseBody
    public ListaProdottoDto rimuovi(@RequestBody ProdottoDto dto) {
        throw new UnsupportedOperationException();
    }
    
    @RequestMapping("/ricerca")
    @ResponseBody
    public ListaProdottoDto ricerca(@RequestBody ProdottoDto dto) {
        throw new UnsupportedOperationException();
    }
    
    @RequestMapping("/visualizza-lista")
    @ResponseBody
    public ListaProdottoDto visualizzaLista(@RequestBody ProdottoDto dto) {
        throw new UnsupportedOperationException();
    }
}
