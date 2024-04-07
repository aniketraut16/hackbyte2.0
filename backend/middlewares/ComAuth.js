// const checkEventOrganizer = async (req, res, next) => {
//     try {
//       const eventId = req.params.id;
//       const userId = req.user.id; // Assuming you have middleware to extract user from JWT
//       const event = await Event.findById(eventId);
//       if (!event) {
//         return res.status(404).json({ message: 'Event not found' });
//       }
//       if (!event.organizers.includes(userId)) {
//         return res.status(403).json({ message: 'You are not authorized to perform this action' });
//       }
//       next();
//     } catch (error) {
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   };
  
//   module.exports = { checkEventOrganizer };
  