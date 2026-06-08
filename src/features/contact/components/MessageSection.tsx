import MuiTextField from "@/components/ui/MuiTextField";
import { Box, Button } from "@mui/material";
import { Send } from "lucide-react";

function MessageSection() {
  const handleSubmitMessage = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/api/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      alert("Failed to send message");
      return;
    }
    alert("Message sent successfully!");
    e.target.reset();
  };

  return (
    <Box
      component="form"
      className="flex flex-col gap-4 px-2 md:px-0"
      onSubmit={handleSubmitMessage}
    >
      <MuiTextField label="Name" name="name" required />
      <MuiTextField label="Email" name="email" type="email" required />
      <MuiTextField label="Company" name="company" />
      <MuiTextField label="Project Type" name="projectType" />
      <MuiTextField
        label="Message"
        multiline
        rows={4}
        name="message"
        required
      />
      <Button
        variant="contained"
        endIcon={<Send size={18} />}
        color="primary"
        className="bg-teal-600! hover:bg-teal-700! py-3! text-lg!"
        type="submit"
      >
        Send Message
      </Button>
    </Box>
  );
}

export default MessageSection;
