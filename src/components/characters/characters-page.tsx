"use client";

import CharacterCard from "@/components/characters/character-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { characters } from "@/data/characters";
import { Search, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function CharactersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWeapon, setSelectedWeapon] = useState<string>("all");
  const [showNewOnly, setShowNewOnly] = useState(false);

  // build weapons list once (no useMemo needed, static data)
  const weaponsList = Array.from(
    new Set(characters.flatMap((c) => c.weapons.map((w) => w.name)))
  ).sort();

  // filtering logic
  const filteredCharacter = characters.filter((char) => {
    const matchesSearch =
      searchQuery === "" ||
      char.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesWeapon =
      selectedWeapon === "all" ||
      char.weapons.some((w) => w.name === selectedWeapon);

    const matchesNew = !showNewOnly || char.isNew;

    return matchesSearch && matchesWeapon && matchesNew;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedWeapon("all");
    setShowNewOnly(false);
  };

  const hasActiveFilters =
    searchQuery !== "" || selectedWeapon !== "all" || showNewOnly;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 gap-2 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search characters..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {/* Weapon filter */}
              <Select value={selectedWeapon} onValueChange={setSelectedWeapon}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="All Weapons" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Weapons</SelectItem>
                  {weaponsList.map((weapon) => (
                    <SelectItem key={weapon} value={weapon}>
                      {weapon}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* New only filter */}
              <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-background">
                <Checkbox
                  id="new-characters"
                  checked={showNewOnly}
                  onCheckedChange={(checked) =>
                    setShowNewOnly(checked === true)
                  }
                />
                <Label
                  htmlFor="new-characters"
                  className="text-sm font-medium cursor-pointer flex items-center gap-1"
                >
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  New Only
                </Label>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results count */}
      <div className="flex items-center justify-between mt-2">
        <p className="text-muted-foreground text-sm">
          Showing {filteredCharacter.length} of {characters.length} characters
        </p>
      </div>

      {/* Character grid */}
      <div className="px-4 md:pl-6 md:pr-4 flex flex-wrap max-w-screen-xl mt-2">
        {filteredCharacter.map((char) => (
          <CharacterCard
            key={char.id}
            name={char.name}
            imageUrl={char.imageUrl}
            isNew={char.isNew ?? false}
          />
        ))}
      </div>
    </>
  );
}
