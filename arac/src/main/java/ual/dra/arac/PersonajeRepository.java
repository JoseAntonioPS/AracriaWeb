package ual.dra.arac;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ual.dra.arac.dataModels.*;

@RepositoryRestResource()
public interface PersonajeRepository extends JpaRepository<Personaje, Long> {
    Personaje findByName(String name);

}