package ual.dra.arac.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import ual.dra.arac.PersonajeRepository;
import ual.dra.arac.UsuarioRepository;
import ual.dra.arac.DesignRepository;
import ual.dra.arac.dataModels.Design;
import ual.dra.arac.dataModels.Usuario;
import ual.dra.arac.dataModels.Personaje;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RepositoryRestController
@RequestMapping(path = "")
public class DesignController {

    @Autowired
    UsuarioRepository usr;

    @Autowired
    PersonajeRepository pers;

    @Autowired
    DesignRepository dess;

    @PostMapping(path = "/postDesign")
    public ResponseEntity postDesign(@RequestParam String username, @RequestParam String name,
            @RequestBody Design design) {

        Usuario usuario = usr.findByUsername(username);
        design.setUsuario(usuario);
        dess.save(design);
        usuario.getDisenU().add(design);
        usr.save(usuario);

        Personaje personaje = pers.findByName(name);
        design.setPersonaje(personaje);
        dess.save(design);
        personaje.getDisen().add(design);
        pers.save(personaje);

        return new ResponseEntity<>("Diseño Agregado.", HttpStatus.ACCEPTED);
    }

    @PostMapping("/getDesigns")
    public ResponseEntity getDesigns() {
        return new ResponseEntity<List<Design>>(dess.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping(value="/getDesignsByUser")
    public ResponseEntity getDesignsByUser(@RequestParam String username) {
        
        Usuario usuario = usr.findByUsername(username);
        
        return new ResponseEntity<Set<Design>>(usuario.getDisenU(), HttpStatus.ACCEPTED);
    }
    
    @GetMapping(value="/getDesignsByPersonaje")
    public ResponseEntity getDesignsByPersonaje(@RequestParam String name) {
        
        Personaje personaje = pers.findByName(name);
        
        return new ResponseEntity<Set<Design>>(personaje.getDisen(), HttpStatus.ACCEPTED);
    }

    /*
     * 
     * 
     * 
     * @PostMapping (path= "/setDesignsByUsername") public ResponseEntity
     * setDesignsByUsername(@RequestParam String username){
     * 
     * User user = usr.findByUsername(username); user.getUserDesigns();
     * 
     * return new ResponseEntity<String>("Diseños de usuario obtenidos.",
     * HttpStatus.ACCEPTED); }
     * 
     * @PostMapping (path= "/setDesignsByname") public ResponseEntity
     * setDesignsByname(@RequestParam String username){
     * 
     * User user = usr.findByUsername(username); user.getUserDesigns();
     * 
     * return new ResponseEntity<>("Diseños de usuario obtenidos.",
     * HttpStatus.ACCEPTED); }
     */
}
