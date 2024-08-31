// Unit tests for: getDetailsOfPatients

import { getDetailsOfPatientsRepo } from "../../model/doctorRepository.js";

import { getDetailsOfPatients } from "../doctorController.js";

jest.mock("../../model/doctorRepository.js");

describe("getDetailsOfPatients() getDetailsOfPatients method", () => {
  let req, res;

  beforeEach(() => {
    req = {
      params: {
        id: "doctor123",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  // Happy Path
  it("should return patient details for a valid doctor ID", async () => {
    // Arrange
    const mockData = { patients: ["patient1", "patient2"] };
    getDetailsOfPatientsRepo.mockResolvedValue(mockData);

    // Act
    await getDetailsOfPatients(req, res);

    // Assert
    expect(getDetailsOfPatientsRepo).toHaveBeenCalledWith("doctor123");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ response: mockData });
  });

  // Edge Case: Invalid Doctor ID
  it("should handle the case when an invalid doctor ID is provided", async () => {
    // Arrange
    req.params.id = "invalidDoctorID";
    getDetailsOfPatientsRepo.mockResolvedValue(null);

    // Act
    await getDetailsOfPatients(req, res);

    // Assert
    expect(getDetailsOfPatientsRepo).toHaveBeenCalledWith("invalidDoctorID");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ response: null });
  });

  // Edge Case: Repository throws an error
  it("should handle errors thrown by the repository", async () => {
    // Arrange
    const mockError = new Error("Database error");
    getDetailsOfPatientsRepo.mockRejectedValue(mockError);
    console.log = jest.fn(); // Mock console.log to suppress error output

    // Act
    await getDetailsOfPatients(req, res);

    // Assert
    expect(getDetailsOfPatientsRepo).toHaveBeenCalledWith("doctor123");
    expect(console.log).toHaveBeenCalledWith(mockError);
  });
});

// End of unit tests for: getDetailsOfPatients
