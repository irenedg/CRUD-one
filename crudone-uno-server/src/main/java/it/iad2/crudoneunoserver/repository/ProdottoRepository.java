package it.iad2.crudoneunoserver.repository;

import it.iad2.crudoneunoserver.model.Prodotto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdottoRepository extends JpaRepository<Prodotto,Long> {
    public List<Prodotto> findByNomeContainsOrCognomeContainsOrTelefonoContains(String n, String c, String tel);
}
