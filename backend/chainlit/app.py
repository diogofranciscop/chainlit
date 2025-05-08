import chainlit as cl


@cl.password_auth_callback
def auth_callback(username: str, password: str):
    # Fetch the user matching username from your database
    # and compare the hashed password with the value stored in the database
    if (username, password) == ("admin", "admin"):
        return cl.User(
            identifier="admin", metadata={"role": "admin", "providxer": "credentials"}
        )
    else:
        return None


@cl.on_message
async def main(message: cl.Message):
    """
    This function shows 'A pensar...' then updates the step to 'Resultados encontrados!'
    """
    async with cl.Step(name="") as step:
        await cl.sleep(2)
        step.input = "world"
    # Simulating the generating of the 3 people
    people = [
        {
            "name": "João Silva",
            "role": "UI/UX Designer",
            "email": "joão.silva@semapa.com",
            "phone": "+351 912 345 234",
            "id": "person1",
        },
        {
            "name": "Raul Esteves",
            "role": "Frontend Developer",
            "email": "raul.estevesa@semapa.com",
            "phone": "+351 932 341 324",
            "id": "person2",
        },
        {
            "name": "Pedro Fernandes",
            "role": "Backend Developer",
            "email": "pedro.fenandes@semapa.com",
            "phone": "+351 923 423 123",
            "id": "person3",
        },
    ]

    card1 = cl.CustomElement(name="ContactCard", props=people[0])
    await cl.Message(
        content="Aqui está o nosso UI/UX designer:", elements=[card1]
    ).send()

    await cl.Message(
        content="Aqui tens a pessoa responsável pelo desenvolvimento do frontend do nosso website:"
    ).send()

    card2 = cl.CustomElement(name="ContactCard", props=people[1])
    await cl.Message(
        content="O nosso desenvolvedor de frontend:", elements=[card2]
    ).send()

    card3 = cl.CustomElement(name="ContactCard", props=people[2])
    await cl.Message(
        content="Se precisares de ajuda com o a infraestutura do backend:",
        elements=[card3],
    ).send()


@cl.set_starters
async def set_starters():
    return [
        cl.Starter(
            label="Preciso de alguém que me ajude a perceber o meu recibo de vencimento",
            message="Preciso de alguém que me ajude a perceber o meu recibo de vencimento",
            icon="public/favicon.svg",
        ),
        cl.Starter(
            label="O meu computador está a dar problemas, quem me pode ajudar?",
            message="O meu computador está a dar problemas, quem me pode ajudar?",
            icon="public/favicon.svg",
        ),
        cl.Starter(
            label="Preciso de um designer",
            message="Preciso de um designer",
            icon="public/favicon.svg",
        ),
    ]
