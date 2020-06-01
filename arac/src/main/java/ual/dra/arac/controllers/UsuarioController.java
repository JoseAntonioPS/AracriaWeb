package ual.dra.arac.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.security.crypto.password.PasswordEncoder;

import ual.dra.arac.UsuarioRepository;
import ual.dra.arac.dataModels.Usuario;


@CrossOrigin(origins = "*", maxAge = 3600)
@RepositoryRestController
@RequestMapping(path = "")
public class UsuarioController {

    @Autowired
    UsuarioRepository usr;
    
    @Autowired
	PasswordEncoder encoder;

    @PostMapping(path = "/postUsuario")
    public ResponseEntity postUsuario(@RequestBody Usuario usuario) {
        Usuario user = new Usuario();
        user = usuario;
        usr.save(user);
        return new ResponseEntity<>("Usuario Agregado.", HttpStatus.ACCEPTED);
    }
    
    @PostMapping(value="/changeEmail")
    public ResponseEntity changeEmail(@RequestParam String username, @RequestParam String email) {
        
        Usuario usuario = usr.findByUsername(username);
        usuario.setEmail(email);
        usr.save(usuario);
        
        return new ResponseEntity<String>("Email cambiado", HttpStatus.ACCEPTED);
    }
    @PostMapping(value="/changePassword")
    public ResponseEntity changePassword(@RequestParam String username, @RequestParam String password) {
        
        Usuario usuario = usr.findByUsername(username);
        usuario.setPassword(encoder.encode(password));
        usr.save(usuario);
        
        return new ResponseEntity<String>("Password cambiado", HttpStatus.ACCEPTED);
    }
    /* @PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody FilterRegistrationBean  signUpRequest) {
		if (usr.existsByNickname(signUpRequest.getNickname())) {
            return new ResponseEntity<>("Usuario Existente.", HttpStatus.ACCEPTED);
		}

		if (usr.existsByEmail(signUpRequest.getEmail())) {
			return new ResponseEntity<>("Email en uso.", HttpStatus.ACCEPTED);
		}

		Usuario ususuario = new Usuario(signUpRequest.getNickname(), 
							 signUpRequest.getEmail(),
							 Encoder.encode(signUpRequest.getPassword()));

         return new ResponseEntity<>("Usuario Agregado.", HttpStatus.ACCEPTED);
	} */
}
