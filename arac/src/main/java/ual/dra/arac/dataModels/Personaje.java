package ual.dra.arac.dataModels;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Personaje{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String imagen;

    private String descripcion;

    @OneToMany(mappedBy = "personaje", cascade = CascadeType.ALL)
    private Set<Design> disen = new HashSet<>();

    
    // ArrayList<Designs> designs = new ArrayList<Designs>();

    // Hibernate requires a no-arg constructor
    public Personaje() {

    }
    public Personaje(String name, String imagen, String descripcion, Set<Design> disen) {
        this.name = name;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.disen = disen;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String image) {
        this.imagen = image;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<Design> getDisen() {
        return disen;
    }

    public void setDisen(Set<Design> disen) {
        this.disen = disen;
    }

    
   
}