package it.iad2.crudoneserver.repository;

import it.iad2.crudoneserver.model.Prodotto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdottoRepository extends JpaRepository<Prodotto, Long> {

    public List<Prodotto> findByCodiceContainsOrDescrizioneContains(String c, String d);
}
