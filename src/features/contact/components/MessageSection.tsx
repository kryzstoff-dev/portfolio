import MuiTextField from "@/components/ui/MuiTextField";
import { Box, Button } from "@mui/material";
import { Send } from "lucide-react";

function MessageSection() {
  return (
    <Box component="form" className="flex flex-col gap-4">
      <MuiTextField label="Name" />
      <MuiTextField label="Email" />
      <MuiTextField label="Message" multiline rows={4} />
      <Button
        variant="contained"
        endIcon={<Send size={18} />}
        color="primary"
        className="bg-blue-600! hover:bg-blue-700! py-3! text-lg!"
      >
        Send Message
      </Button>
    </Box>
  );
}

export default MessageSection;
