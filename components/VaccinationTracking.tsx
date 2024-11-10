import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

const VaccinationPage = ({ params: { userId } }: SearchParamProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const currentMedications = [
    {
      name: "Medication Name",
      dosage: "500mg",
      frequency: "Twice daily",
      nextDose: "2 hours",
    },
  ];

  const pastMedications = [
    // Sample data would go here
  ];

  const vaccinations = [
    {
      name: "Vaccine Name",
      date: "MM/DD/YYYY",
      nextDose: "MM/DD/YYYY",
    },
  ];

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <h1 className="text-2xl font-bold mb-6">My Health Records</h1>

          <Tabs defaultValue="medications" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="medications" className="flex-1">
                Medications
              </TabsTrigger>
              <TabsTrigger value="vaccinations" className="flex-1">
                Vaccinations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="medications">
              <div className="space-y-6">
                <Input
                  type="search"
                  placeholder="Search medications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />

                <div>
                  <h2 className="text-lg font-semibold mb-4">
                    Current Medications
                  </h2>
                  <div className="grid gap-4">
                    {currentMedications.map((med, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-full bg-gray-200" />
                          <div className="space-y-1">
                            <h3 className="font-medium">{med.name}</h3>
                            <p className="text-sm text-gray-500">
                              Dosage: {med.dosage}
                            </p>
                            <p className="text-sm text-gray-500">
                              Frequency: {med.frequency}
                            </p>
                            <p className="text-sm text-gray-500">
                              Next dose in: {med.nextDose}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-4">
                    Past Medications
                  </h2>
                  <Card className="p-4">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left">
                          <th className="pb-2">Name</th>
                          <th className="pb-2">Duration</th>
                          <th className="pb-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Past medications would be mapped here */}
                      </tbody>
                    </table>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vaccinations">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Vaccination History</h2>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    View Calendar
                  </Button>
                </div>

                <div className="grid gap-4">
                  {vaccinations.map((vaccine, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200" />
                        <div className="space-y-1 flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{vaccine.name}</h3>
                              <p className="text-sm text-gray-500">
                                Date: {vaccine.date}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">
                                Next dose:
                              </p>
                              <p className="font-medium">{vaccine.nextDose}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <Button variant="outline" className="w-full">
              Download Records
            </Button>
            <Button variant="outline" className="w-full">
              Share with Doctor
            </Button>
            <Button variant="outline" className="w-full">
              Set Reminders
            </Button>
          </div>

          <p className="copyright mt-10 py-12">© 2024 ClinicFlow</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default VaccinationPage;
