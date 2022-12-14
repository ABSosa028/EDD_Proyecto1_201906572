class Nodo_arbol {
    constructor(name, topic, invitados, duracion) {
        this.topic = topic;
        this.nombre = name;
        this.invitados = invitados;
        this.duracion = duracion;
        this.izquierda = null;
        this.derecha = null;
    }
}

class Arbol{
    
    constructor() {
        this.raiz = null;
        this.texto = "";
    }

    insertar(name, topic, inv, dura) {
        var nuevo = new Nodo_arbol(name, topic, inv, dura);
        if (this.raiz == null) {
            this.raiz = nuevo;
        } else {
            var actual = this.raiz;
            var padre;
            while (true) {
                padre = actual;
                if (name < actual.nombre) {
                    actual = actual.izquierda;
                    if (actual == null) {
                        padre.izquierda = nuevo;
                        break;
                    }
                } else {
                    actual = actual.derecha;
                    if (actual == null) {
                        padre.derecha = nuevo;
                        break;
                    }
                }
            }
        }
    }

    preorden(raiz) {
        if (raiz != null) {
            console.log(raiz.nombre);
            this.preorden(raiz.izquierda);
            this.preorden(raiz.derecha);
        }
    }
    
    inorden(raiz) {
        if (raiz != null) {
            this.inorden(raiz.izquierda);
            console.log(raiz.nombre);
            this.inorden(raiz.derecha);
        }
    }
    postorden(raiz) {
        if (raiz != null) {
            this.postorden(raiz.izquierda);
            this.postorden(raiz.derecha);
            console.log(raiz.nombre);
        }
    }
    buscar_Nodo_arbol(nombre) {
        var actual = this.raiz;
        while (actual != null) {
            if (nombre == actual.nombre) {
                return actual;
            } else if (dpi < actual.dpi) {
                actual = actual.izquierda;
            } else {
                actual = actual.derecha;
            }
        }   return null;
    }

    graficar(){
        this.texto = "";
        var codigodot = "digraph G{\n graph[size = \"11.70,6.25\" ] \nlabel=\" Podcast-Arbol \";\n";
        
        var derecha = this.raiz;
       
        
        this.texto += derecha.dpi + " [label=\"" + derecha.nombre + "\"];";
        this.texto += derecha.dpi + " -> " + derecha.izquierda.dpi+ ";";
        this.texto += derecha.dpi + " -> " + derecha.derecha.dpi+ ";";
        
        
        this.graficar_lados(derecha.izquierda);
        this.graficar_lados(derecha.derecha);
        
        codigodot += "\n"+this.texto+"\n";
        
        codigodot += "}";
        
        d3.select("#lienzo4").graphviz()
        .renderDot(codigodot)
    }
    
    graficar_lados(nodo){
        this.texto += nodo.topic + " [label=\"" + nodo.nombre + "\"];\n";
        if(nodo.izquierda != null){
            this.texto += nodo.topic + " -> " + nodo.izquierda.topic+ ";\n";
            this.graficar_lados(nodo.izquierda);
        }
        if(nodo.derecha != null){
            this.texto += nodo.topic + " -> " + nodo.derecha.topic+ ";\n";
            this.graficar_lados(nodo.derecha);
        }        


    }

    enviar_tabla(raiz){
        if (raiz != null) {
            let tblDatos = document.getElementById("tblautores").insertRow(-1);
            //insertar imagen
            let cellImg = tblDatos.insertCell(-1);
            let img = document.createElement("img");
            img.src = "../Static/Img/pro.jpg";
            img.width = "100";
            img.height = "100";
            cellImg.appendChild(img);
            let cell2 = tblDatos.insertCell(-1);
            let cell3 = tblDatos.insertCell(-1);
            let cell4 = tblDatos.insertCell(-1);
            let cell5 = tblDatos.insertCell(-1);
            
            let cell7 = tblDatos.insertCell(-1);  

            cell2.innerHTML = raiz.nombre_autor;
            cell3.innerHTML = raiz.correo;
            cell4.innerHTML = raiz.telefono;
            cell5.innerHTML = raiz.direccion;
            
            cell7.innerHTML = raiz.dpi;
            
            this.enviar_tabla(raiz.izquierda);
            this.enviar_tabla(raiz.derecha);
        }            
        
        
       

    }

}
