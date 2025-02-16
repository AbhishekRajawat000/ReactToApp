# Modern Todo Application

A responsive and professionally designed Todo application built with React, featuring a clean interface, smooth animations, and comprehensive device support.

## 🚀 Features

- Clean and modern user interface
- Fully responsive design for all devices
- Dark mode support
- Smooth animations and transitions
- Keyboard accessibility
- Touch-optimized for mobile devices
- Task status tracking
- Batch actions (toggle all tasks)
- Local state management
- Optimized performance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-todo-app.git
cd modern-todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install lucide-react
```

## 🏃‍♂️ Running the Application

To start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## 📁 Project Structure

```
modern-todo-app/
├── src/
│   ├── components/
│   │   ├── Todo.jsx
│   │   └── Todo.css
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
└── package.json
```

## 💻 Usage

The Todo app provides the following functionality:

1. **Adding Tasks**
   - Type your task in the input field
   - Press Enter or click the "Add Task" button

2. **Managing Tasks**
   - Click the circle icon to toggle task completion
   - Click the trash icon to delete a task
   - Use "Toggle All" to change all tasks' status

3. **Task Statistics**
   - View active and completed task counts
   - Track overall progress

## 🎨 Styling Customization

The application uses CSS variables for easy theme customization. Main variables can be found in the `:root` selector in `Todo.css`:

```css
:root {
  --primary-color: #4f46e5;
  --primary-hover: #4338ca;
  /* ... other variables */
}
```

## 📱 Responsive Breakpoints

The application is optimized for the following screen sizes:

- Large Screens: 1200px and up
- Medium Screens: 768px to 1199px
- Tablets: 601px to 767px
- Mobile Landscape: 481px to 600px
- Mobile Portrait: 480px and below

## ♿ Accessibility

The application follows WCAG guidelines with:
- Proper contrast ratios
- Keyboard navigation
- Screen reader support
- Touch-friendly targets (minimum 44px)
- Reduced motion support

## 🌙 Dark Mode

The application automatically supports system dark mode preferences. To test:
1. Enable dark mode in your system settings
2. The application will automatically adjust its theme

## ⚡ Performance Optimization

- Efficient state updates
- Optimized re-renders
- Hardware-accelerated animations
- Responsive image handling
- Touch event optimization

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS/Android)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE.md file for details

## 🙏 Acknowledgments

- Lucide Icons for the beautiful icon set
- React team for the amazing framework
- The open-source community for inspiration

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.