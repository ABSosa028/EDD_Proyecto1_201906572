class Usuario{
    constructor(user, name, code, cel, pass, tp ){
        this.usuario = user;
        this.nombre = name;
        this.dpi = code;
        this.telefono = cel;
        this.contraseña = pass;
        this.tipo = tp;
        this.siguiente = null;
    }
    
    texto(){
        var a = " "+ this.usuario + " " + this.nombre + " " + this.dpi + " " + this.telefono + " " + this.contraseña + " " + this.tipo
        return a
    }
}


class listaUsuarios{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    agregar(nuevo){
        if(this.primero = null){
            this.primero = nuevo
            this.ultimo = nuevo
        }else{
            var temp = this.ultimo
            this.ultimo = nuevo
            temp.siguiente = nuevo
        }
    }

    eliminar(usuario){
        if(this.primero = null){
            alert("No hay elementos para borrar");
        }else{
            var temp = this.primero;
            while (temp.siguiente != null){
                if(temp.siguiente.usuario = usuario){
                    var temp2 = temp.siguiente.siguiente;
                    temp.siguiente.siguiente = null;
                    temp.siguiente = temp2;
                    alert("Usuario eliminado");
                    return;
                }
                temp = temp.siguiente;
            }
            alert("Usuario no encontrado");
        }
    }

    login(user, pass, tipo){
        if(user == "" || pass == ""){
            return false;
        }
        if(this.primero = null){
            return false;
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.usuario == user && pass== temp.contraseña){
                    if(temp.tipo == tipo){
                        return true;
                    }else{
                        return false;
                    }
                }
                temp = temp.siguiente;
            }
            return false;
        }
    }


}
