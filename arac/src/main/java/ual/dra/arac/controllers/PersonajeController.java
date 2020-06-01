package ual.dra.arac.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import ual.dra.arac.PersonajeRepository;
import ual.dra.arac.dataModels.Personaje;

@CrossOrigin(origins = "*", maxAge = 3600)
@RepositoryRestController
@RequestMapping(path = "")
public class PersonajeController {

    @Autowired
    PersonajeRepository pers;

    @PostMapping(path = "/postPersonaje")
    public ResponseEntity postPersonaje(@RequestBody Personaje personaje) {
        Personaje perso = new Personaje();
        perso = personaje;
        pers.save(perso);
        return new ResponseEntity<>("Personaje Agregado.", HttpStatus.ACCEPTED);
    }

    @GetMapping(value = "/getPersonajes")
    public ResponseEntity getPersonajes() {
        return new ResponseEntity<List<Personaje>>(pers.findAll(), HttpStatus.ACCEPTED);
    }  
    
}