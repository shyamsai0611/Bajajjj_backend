const { validateFile } = require('../utils/fileUtils');

// POST handler
exports.handlePostRequest = (req, res) => {
  const { data, file_b64 } = req.body;
  const fullName = "shyamsaimanohar"; // Replace with dynamic user data
  const dob = "06112003";      // Replace with dynamic user data
  
  let numbers = [];
  let alphabets = [];
  let highestLowercaseAlphabet = [];

  // Separate numbers and alphabets
  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else {
      alphabets.push(item);
    }
  });

  // Find highest lowercase alphabet
  const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
  if (lowercaseAlphabets.length) {
    highestLowercaseAlphabet.push(lowercaseAlphabets.sort().pop());
  }

  // Handle file validation
  const fileInfo = file_b64 ? validateFile(file_b64) : { file_valid: false, file_mime_type: null, file_size_kb: null };

  res.status(200).json({
    is_success: true,
    user_id: `${fullName}_${dob}`,
    email: "shyamsaimanohar_k@srmap.edu.in",  // Example email
    roll_number: "AP21110011197", // Example roll number
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
    file_valid: fileInfo.file_valid,
    file_mime_type: fileInfo.file_mime_type,
    file_size_kb: fileInfo.file_size_kb
  });
};

// GET handler
exports.handleGetRequest = (req, res) => {
  res.status(200).json({
    operation_code: 1
  });
};
