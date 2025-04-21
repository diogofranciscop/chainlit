import chainlit as cl


@cl.on_chat_start
async def start():
    # Create form elements using cl.AskUser
    elements = [
        cl.TextInput(name="name", label="Enter your name"),
        cl.Dropdown(
            name="department",
            label="Select your department",
            options=["Sales", "Support", "Engineering"],
            initial_value="Sales",
        ),
        cl.Button(name="submit", label="Submit Form"),
    ]
    await cl.AskUser(content="Please fill the form:", elements=elements).send()


@cl.on_submit
async def handle_submission(payload):
    name = payload["name"]
    department = payload["department"]

    # Process form data
    await cl.Message(f"Received: {name} from {department}").send()
