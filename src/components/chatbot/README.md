# Chatbot Module

A professional, modular chatbot component for Sueño Dorado website.

## Architecture

Follows clean architecture principles with separation of concerns:

```
chatbot/
├── index.jsx              # Main component
├── components/            # UI components
│   ├── ChatButton.jsx
│   ├── ChatWindow.jsx
│   ├── MessageBubble.jsx
│   └── TypingIndicator.jsx
├── hooks/                 # Custom hooks
│   └── useChatbot.js
├── utils.js              # Utility functions
├── constants.js          # Configuration
├── types.js              # Type definitions
├── exports.js            # Module exports
└── README.md             # Documentation
```

## Features

- 🤖 **Intent Detection**: Automatic intent recognition
- 💬 **Natural Conversations**: Context-aware responses
- 📱 **WhatsApp Integration**: Direct contact options
- 🎯 **Quick Actions**: Predefined response options
- 🌙 **Dark Mode**: Full theme support
- 📱 **Responsive**: Mobile-first design
- ♿ **Accessible**: WCAG compliant
- 🔄 **Session Management**: Automatic session handling

## Usage

### Basic Usage

```jsx
import Chatbot from '@/components/chatbot';

function App() {
  return (
    <div>
      {/* Your app content */}
      <Chatbot />
    </div>
  );
}
```

### Advanced Usage

```jsx
import { useChatbot } from '@/components/chatbot';

function CustomChat() {
  const {
    messages,
    isOpen,
    handleUserMessage,
    handleQuickReply,
    toggleChat
  } = useChatbot();

  return (
    <div>
      {/* Custom chat UI */}
      <button onClick={toggleChat}>
        Open Chat ({messages.length} messages)
      </button>
    </div>
  );
}
```

## Configuration

Edit `constants.js` to customize:

- Bot responses
- Quick actions
- Business information
- WhatsApp number
- UI settings

## Intents

The chatbot supports these intents:

- `greeting` - Initial greetings
- `product_info` - Product information
- `pricing` - Price inquiries
- `shipping` - Delivery information
- `warranty` - Warranty details
- `contact` - Contact options
- `catalog` - Product catalog
- `help` - General assistance
- `human_agent` - Human handoff

## Styling

Uses Tailwind CSS classes with custom animations:

- `animate-slide-up` - Entry animation
- `animate-pulse` - Notification badge
- `animate-bounce` - Typing indicator

## Testing

Each component is independently testable:

```bash
# Test individual components
npm test ChatButton
npm test ChatWindow
npm test useChatbot
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Lazy loading of components
- Optimized re-renders
- Memory leak prevention
- Session cleanup

## Accessibility

- Full keyboard navigation
- Screen reader support
- ARIA labels
- Focus management
- High contrast support
