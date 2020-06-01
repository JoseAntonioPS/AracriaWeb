package ual.dra.arac;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ual.dra.arac.dataModels.*;

@RepositoryRestResource()
public interface DesignRepository extends JpaRepository<Design, Long> {

}