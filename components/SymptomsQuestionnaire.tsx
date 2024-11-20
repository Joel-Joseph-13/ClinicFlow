"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Doctors } from "@/constants";

// Define comprehensive symptom sets
const symptomSets = [
  [
    {
      id: "heart",
      question: "Are you experiencing chest pain or heart-related issues?",
      specialization: "Cardiology",
    },
    {
      id: "skin",
      question: "Do you have any skin, hair, or nail problems?",
      specialization: "Dermatology",
    },
    {
      id: "child",
      question: "Is this for a child's health issue?",
      specialization: "Pediatrics",
    },
  ],
  [
    {
      id: "bone",
      question: "Are you having problems with bones, joints, or muscles?",
      specialization: "Orthopedics",
    },
    {
      id: "brain",
      question: "Are you experiencing headaches or neurological symptoms?",
      specialization: "Neurology",
    },
    {
      id: "stomach",
      question: "Do you have digestive system issues?",
      specialization: "Gastroenterology",
    },
  ],
  [
    {
      id: "mental",
      question: "Are you dealing with mental health concerns?",
      specialization: "Psychiatry",
    },
    {
      id: "breathing",
      question: "Are you having breathing difficulties or lung-related issues?",
      specialization: "Pulmonology",
    },
    {
      id: "hormones",
      question: "Do you have concerns about hormones or metabolism?",
      specialization: "Endocrinology",
    },
  ],
  [
    {
      id: "infection",
      question:
        "Are you experiencing symptoms of infection, like fever or chills?",
      specialization: "Infectious Disease",
    },
    {
      id: "vision",
      question: "Do you have any vision problems or eye discomfort?",
      specialization: "Ophthalmology",
    },
    {
      id: "hearing",
      question: "Are you experiencing hearing loss or ear discomfort?",
      specialization: "Otolaryngology",
    },
  ],
  [
    {
      id: "urinary",
      question:
        "Are you having issues related to urination or bladder function?",
      specialization: "Urology",
    },
    {
      id: "reproductive",
      question: "Do you have any concerns regarding reproductive health?",
      specialization: "Gynecology",
    },
    {
      id: "allergies",
      question:
        "Are you experiencing allergy symptoms or immune system issues?",
      specialization: "Allergy and Immunology",
    },
  ],
];

export function DoctorSuggestionQuestionnaire() {
  const [currentSet, setCurrentSet] = useState(0); // Track the current question set
  const [selectedSymptoms, setSelectedSymptoms] = useState<
    Record<string, boolean>
  >({});
  const [suggestedDoctors, setSuggestedDoctors] = useState<typeof Doctors>([]);

  const handleSymptomChange = (symptomId: string, isSelected: boolean) => {
    setSelectedSymptoms((prev) => ({ ...prev, [symptomId]: isSelected }));
  };

  const handleNextSet = () => {
    if (currentSet < symptomSets.length - 1) {
      setCurrentSet(currentSet + 1); // Go to the next set
    } else {
      suggestDoctors(); // On the last set, generate doctor suggestions
    }
  };

  const suggestDoctors = () => {
    const matchedSpecializations = symptomSets
      .flat()
      .filter((symptom) => selectedSymptoms[symptom.id])
      .map((symptom) => symptom.specialization);

    const doctorsToSuggest = Doctors.filter((doctor) =>
      matchedSpecializations.includes(doctor.specialization)
    );

    setSuggestedDoctors(doctorsToSuggest);
  };

  const resetQuestionnaire = () => {
    setCurrentSet(0);
    setSelectedSymptoms({});
    setSuggestedDoctors([]);
  };

  if (suggestedDoctors.length > 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Suggested Doctors</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Based on your symptoms, we suggest the following specialists:</p>
          {suggestedDoctors.map((doctor, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-lg font-bold">{doctor.name}</h3>
              <p>Specialization: {doctor.specialization}</p>
            </div>
          ))}
          <Button onClick={resetQuestionnaire} className="mt-4">
            Start Over
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>Symptom Questionnaire - Round {currentSet + 1}</CardTitle>
      </CardHeader>
      <CardContent>
          <p className="mb-4">Please select all symptoms that apply:</p>
          {symptomSets[currentSet].map((symptom) => (
          <div key={symptom.id} className="mb-2 flex items-center space-x-2">
            <Checkbox
              checked={!!selectedSymptoms[symptom.id]}
              onCheckedChange={(isSelected) =>
              handleSymptomChange(symptom.id, Boolean(isSelected))  // Convert isSelected to boolean
              }
            id={symptom.id}
            />
          <Label htmlFor={symptom.id}>{symptom.question}</Label>
          </div>
  ))}
        <Button onClick={handleNextSet} className="mt-4">
          {currentSet < symptomSets.length - 1 ? "Next" : "Get Suggested Doctors"}
        </Button>
      </CardContent>
    </Card>
  );
}
