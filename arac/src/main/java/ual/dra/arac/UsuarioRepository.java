package ual.dra.arac;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ual.dra.arac.dataModels.*;

@RepositoryRestResource()
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByUsername(String username);
    Usuario findByEmail(String email);
    
	Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}