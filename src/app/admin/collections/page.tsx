"use client"

import {
  createCollection,
  deleteCollection,
  fetchCollections,
  updateCollection,
} from "@/lib/utils/apiService";
import React from "react";

const CollectionsPage = () => {
  const [collections, setCollections] = React.useState([]);
  const [newCollectionName, setNewCollectionName] = React.useState("");
  const [editCollectionSlug, setEditCollectionSlug] = React.useState("");
  const [editCollectionName, setEditCollectionName] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadCollections = async () => {
      try {
        const data = await fetchCollections();
        setCollections(data);
      } catch (error) {
        setError("Failed to load collections");
      }
    };
    loadCollections();
  }, []);

  const handleAddCollection = async () => {
    try {
      await createCollection({ name: newCollectionName });
      setNewCollectionName("");
      // Reload collections
      const updatedCollections = await fetchCollections();
      setCollections(updatedCollections);
    } catch (error) {
      setError("Failed to add collection");
    }
  };

  const handleDeleteCollection = async (collectionSlug: string) => {
    try {
      await deleteCollection(collectionSlug);
      // Reload collections
      const updatedCollections = await fetchCollections();
      setCollections(updatedCollections);
    } catch (error) {
      setError("Failed to delete collection");
    }
  };

  const handleEditCollection = (collection) => {
    setEditCollectionSlug(collection.slug);
    setEditCollectionName(collection.name);
  };

  const handleUpdateCollection = async () => {
    if (editCollectionSlug) {
      try {
        await updateCollection(editCollectionSlug, {
          name: editCollectionName,
        });
        setEditCollectionSlug("");
        setEditCollectionName("");
        const updatedCollections = await fetchCollections();
        setCollections(updatedCollections);
      } catch (error) {
        setError("Failed to update collection.");
      }
    }
  };

  return (
    <div>
      <h2>Manage Collections</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        value={newCollectionName}
        onChange={(e) => setNewCollectionName(e.target.value)}
        placeholder="New collection name"
      />
      <button onClick={handleAddCollection}>Add Collection</button>
      <ul>
        {collections.map((collection) => (
          <li key={collection.slug}>
            {editCollectionSlug === collection.slug ? (
              <>
                <input
                  type="text"
                  value={editCollectionName}
                  onChange={(e) => setEditCollectionName(e.target.value)}
                />
                <button onClick={handleUpdateCollection}>Update</button>
                <button onClick={() => setEditCollectionSlug("")}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                {collection.name}
                <button onClick={() => handleEditCollection(collection)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteCollection(collection.slug)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionsPage;
