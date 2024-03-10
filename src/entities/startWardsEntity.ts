
export class StarWarsEntity {
    id: string
    nombre: string
    periodo_rotacion: string
    periodo_orbital: string
    diametro: string
    clima: string
    gravedad: string
    terreno: string
    agua_superficial: string
    poblacion: string
    residentes: Array<string>
    peliculas: Array<string>
    creado: string
    editado: string
    url: string

    constructor (builder: any) {
        this.id = builder?.id
        this.nombre = builder?.name
        this.periodo_rotacion = builder?.rotation_period
        this.periodo_orbital = builder?.orbital_period
        this.diametro = builder?.diameter
        this.clima = builder?.climate
        this.gravedad = builder?.gravity
        this.terreno = builder?.terrain
        this.agua_superficial = builder?.surface_water
        this.poblacion = builder?.population
        this.residentes = builder?.residents
        this.peliculas = builder?.films
        this.creado = builder?.created
        this.editado = builder?.edited
        this.url = builder?.url
    }
}