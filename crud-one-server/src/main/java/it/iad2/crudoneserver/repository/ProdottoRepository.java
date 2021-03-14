package it.iad2.crudoneserver.repository;

import it.iad2.crudoneserver.model.Prodotto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdottoRepository extends JpaRepository<Prodotto, Long> {

    public List<Prodotto> findByCodiceContainsOrDescrizioneContains(String c, String d);

    @Modifying
    @Query("update Prodotto p set p.codice = :codice, p.descrizione = :descrizione where p.id = :id")
    int updateProdottoSetStatusForId(@Param("codice") String codice, @Param("descrizione") String descrizione,
            @Param("id") Long id);
}
