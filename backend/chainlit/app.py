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
    # Create a new step with "A pensar..."
    async with cl.Step(name="") as step:
        await cl.sleep(2)
        step.output = "world"


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
