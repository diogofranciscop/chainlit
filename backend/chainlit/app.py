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

    # Instead of sending all cards at once, we'll send them individually with custom messages between them

    # Create three different person data objects - make each unique
    people = [
        {
            "name": "Aditi Verma",
            "role": "UI/UX Designer",
            "email": "aditi.verma@gfg.com",
            "phone": "+91-98775677",
            "location": "Delhi, DL",
            "linkedin": "#",
            "github": "#",
            "id": "person1",  # Add unique ID for each person
        },
        {
            "name": "Rahul Sharma",
            "role": "Frontend Developer",
            "email": "rahul.sharma@gfg.com",
            "phone": "+91-98775678",
            "location": "Mumbai, MH",
            "linkedin": "#",
            "github": "#",
            "id": "person2",  # Add unique ID for each person
        },
        {
            "name": "Priya Singh",
            "role": "Backend Developer",
            "email": "priya.singh@gfg.com",
            "phone": "+91-98775679",
            "location": "Bangalore, KA",
            "linkedin": "#",
            "github": "#",
            "id": "person3",  # Add unique ID for each person
        },
    ]

    # Send first card
    card1 = cl.CustomElement(name="ContactCard", props=people[0])
    await cl.Message(content="Here is our UI/UX designer:", elements=[card1]).send()

    # Custom phrase between first and second card
    await cl.Message(
        content="Next, we have a frontend developer who can help with your website:"
    ).send()

    # Send second card
    card2 = cl.CustomElement(name="ContactCard", props=people[1])
    await cl.Message(content="Our frontend expert:", elements=[card2]).send()

    # Custom phrase between second and third card
    await cl.Message(
        content="Finally, for backend infrastructure, we recommend:"
    ).send()

    # Send third card
    card3 = cl.CustomElement(name="ContactCard", props=people[2])
    await cl.Message(content="Our backend specialist:", elements=[card3]).send()


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
