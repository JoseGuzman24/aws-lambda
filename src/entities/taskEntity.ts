export class TaskBuilder {
    id: string
    title: string
    description: string
    createdAt: Date

    addId (id: string): TaskBuilder {
        this.id = id
        return this
    }

    addTitle (title: string): TaskBuilder {
        this.title = title
        return this
    }

    addDescription (description: string): TaskBuilder {
        this.description = description
        return this
    }

    addCreatedAt (createdAt: Date): TaskBuilder {
        this.createdAt = createdAt
        return this
    }

    build (): TaskEntity {
        return new TaskEntity(this)
    }
}

export class TaskEntity {
    id: string
    title: string
    description: string
    createdAt: Date

    constructor (builder: TaskBuilder) {
        Object.assign(this, builder)
    }
}