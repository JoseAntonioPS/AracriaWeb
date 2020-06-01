package ual.dra.arac;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ual.dra.arac.dataModels.ERole;
import ual.dra.arac.dataModels.URole;

@Repository
public interface URoleRepository extends JpaRepository<URole, Long> {
	URole findByName(ERole name);
}