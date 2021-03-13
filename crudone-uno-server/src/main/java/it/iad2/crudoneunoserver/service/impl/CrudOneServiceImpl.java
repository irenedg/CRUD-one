package it.iad2.crudoneunoserver.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import it.iad2.crudoneunoserver.service.CrudOneService;
import it.iad2.crudoneunoserver.repository.ProdottoRepository;

@Service
public class CrudOneServiceImpl implements CrudOneService {

    @Autowired
    ProdottoRepository prodottoRepository;
 
}
