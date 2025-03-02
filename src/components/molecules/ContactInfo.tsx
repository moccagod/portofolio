const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-gray-900">
        Let’s chat.
        <br />
        Tell me about your project.
      </h1>
      <p className="text-gray-600 mt-4">Let’s create something together!</p>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
        <span className="text-gray-500 text-xl">📩</span>
        <span className="text-lg font-semibold text-indigo-600">
          azminailalhadi.py@gmail.com
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
