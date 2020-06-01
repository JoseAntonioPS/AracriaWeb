package ual.dra.arac.dataModels;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import ual.dra.arac.dataModels.URole;

@Entity
@Table( uniqueConstraints = { 
			@UniqueConstraint(columnNames = "username"),
			@UniqueConstraint(columnNames = "email") 
		})
public class Usuario{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String username;

    @NotBlank
    @Email
    @Column(unique = true)
    private String email;

    @NotBlank
    private String password;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private Set<Design> disenU = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "usuario_uroles", 
				joinColumns = @JoinColumn(name = "usuario_id"), 
				inverseJoinColumns = @JoinColumn(name = "urole_id"))
	private Set<URole> roles = new HashSet<>();

    // Hibernate requires a no-arg constructor
    public Usuario() {

    }
    public Usuario(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Design> getDisenU() {
        return disenU;
    }

    public void setDisenU(Set<Design> disenU) {
        this.disenU = disenU;
    }

    public Set<URole> getRoles() {
        return roles;
    }

    public void setRoles(Set<URole> roles) {
        this.roles = roles;
    }  
}