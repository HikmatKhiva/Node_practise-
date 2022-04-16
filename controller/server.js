let servers = [
    { id: 1, title: "AWS", status: "working" },
    { id: 2, title: "Google", status: "working" },
    { id: 3, title: "Facebook", status: "working" },
    { id: 4, title: "Microsoft", status: "working" },
    { id: 5, title: "Amazon Cloud", status: "working" },
]

export const getAll = (req, res) => {
    res.status(200).json(servers)
}

export const create = (req, res) => {
    const newServer = {
        ...req.body,
        id:Date.now().toString(),
    }
    servers.push(newServer)
    res.status(200).json(newServer)
}

export const remove = (req, res) => {
    console.log("ID", req.params.id);
    servers = servers.filter(s => s.id !== req.params.id)
    res.json({ message: "Server has been remover." })
}