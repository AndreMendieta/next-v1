type PropsProps = {
    nombre: string
}

export default function Props({ nombre }: PropsProps) {
    return (
        <div>
            {nombre}
        </div>
    )
}
