# Runtime Mesh Generation (Wobbly Cube)

This shows how to create a Cube mesh, assigning it to a mesh renderer and a collider, just from code. It also moves
the vertices around every frame in a wobbly movement.

Mesh generation can only run on world scripts.

This example is a bit silly because we're updating a mesh in the update loop (which is performance heavy). You should
not update meshes every frame.

We're also doing a bit of a hack enabling and disabling the mesh collider component, so it forces an update.

For this example we require to assign a MeshFilter as `meshFilter` and a MeshCollider component as `meshCollider`. Note
those are components, not gameObjects. If you want to use gameObjects, edit the code to perform a GetComponent.


```lua

UnityEngine = require "UnityEngine"

-- Variables to store mesh data
local mesh = nil
local meshCollider = nil
local vertices = nil
local originalVertices = nil

-- Configurable parameters
local wobbleStrength = 0.5
local wobbleSpeed = 2.0

function Start()

    -- Save a reference of our mesh collider, so we can force it to update
    meshCollider = BoundObjects.meshCollider

    if not meshCollider then
        Script.Destroy("No MeshCollider component found!")
        return
    end
    
    local meshFilter = BoundObjects.meshFilter
    
    if not meshFilter then
        Script.Destroy("No MeshFilter component found!")
        return
    end

    -- Create an empty mesh
    mesh = UnityEngine.Mesh()
    
    -- Create cube vertices (24 vertices, 4 for each face)
    vertices = {
        -- Front face
        UnityEngine.NewVector3(-0.5, -0.5,  0.5),  -- Bottom Left
        UnityEngine.NewVector3( 0.5, -0.5,  0.5),  -- Bottom Right
        UnityEngine.NewVector3( 0.5,  0.5,  0.5),  -- Top Right
        UnityEngine.NewVector3(-0.5,  0.5,  0.5),  -- Top Left
        
        -- Right face
        UnityEngine.NewVector3( 0.5, -0.5,  0.5),  -- Bottom Left
        UnityEngine.NewVector3( 0.5, -0.5, -0.5),  -- Bottom Right
        UnityEngine.NewVector3( 0.5,  0.5, -0.5),  -- Top Right
        UnityEngine.NewVector3( 0.5,  0.5,  0.5),  -- Top Left
        
        -- Back face
        UnityEngine.NewVector3( 0.5, -0.5, -0.5),  -- Bottom Left
        UnityEngine.NewVector3(-0.5, -0.5, -0.5),  -- Bottom Right
        UnityEngine.NewVector3(-0.5,  0.5, -0.5),  -- Top Right
        UnityEngine.NewVector3( 0.5,  0.5, -0.5),  -- Top Left
        
        -- Left face
        UnityEngine.NewVector3(-0.5, -0.5, -0.5),  -- Bottom Left
        UnityEngine.NewVector3(-0.5, -0.5,  0.5),  -- Bottom Right
        UnityEngine.NewVector3(-0.5,  0.5,  0.5),  -- Top Right
        UnityEngine.NewVector3(-0.5,  0.5, -0.5),  -- Top Left
        
        -- Top face
        UnityEngine.NewVector3(-0.5,  0.5,  0.5),  -- Bottom Left
        UnityEngine.NewVector3( 0.5,  0.5,  0.5),  -- Bottom Right
        UnityEngine.NewVector3( 0.5,  0.5, -0.5),  -- Top Right
        UnityEngine.NewVector3(-0.5,  0.5, -0.5),  -- Top Left
        
        -- Bottom face
        UnityEngine.NewVector3(-0.5, -0.5, -0.5),  -- Bottom Left
        UnityEngine.NewVector3( 0.5, -0.5, -0.5),  -- Bottom Right
        UnityEngine.NewVector3( 0.5, -0.5,  0.5),  -- Top Right
        UnityEngine.NewVector3(-0.5, -0.5,  0.5)   -- Top Left
    }
    
    -- Create triangles (faces)
    local triangles = {
        -- Front face
        0, 1, 2,  0, 2, 3,
        -- Right face
        4, 5, 6,  4, 6, 7,
        -- Back face
        8, 9, 10, 8, 10, 11,
        -- Left face
        12, 13, 14, 12, 14, 15,
        -- Top face
        16, 17, 18, 16, 18, 19,
        -- Bottom face
        20, 21, 22, 20, 22, 23
    }
    
    -- Create normals (pointing outward)
    local normals = {
        -- Front face normals (pointing forward)
        UnityEngine.NewVector3(0, 0, 1),
        UnityEngine.NewVector3(0, 0, 1),
        UnityEngine.NewVector3(0, 0, 1),
        UnityEngine.NewVector3(0, 0, 1),
        
        -- Right face normals (pointing right)
        UnityEngine.NewVector3(1, 0, 0),
        UnityEngine.NewVector3(1, 0, 0),
        UnityEngine.NewVector3(1, 0, 0),
        UnityEngine.NewVector3(1, 0, 0),
        
        -- Back face normals (pointing back)
        UnityEngine.NewVector3(0, 0, -1),
        UnityEngine.NewVector3(0, 0, -1),
        UnityEngine.NewVector3(0, 0, -1),
        UnityEngine.NewVector3(0, 0, -1),
        
        -- Left face normals (pointing left)
        UnityEngine.NewVector3(-1, 0, 0),
        UnityEngine.NewVector3(-1, 0, 0),
        UnityEngine.NewVector3(-1, 0, 0),
        UnityEngine.NewVector3(-1, 0, 0),
        
        -- Top face normals (pointing up)
        UnityEngine.NewVector3(0, 1, 0),
        UnityEngine.NewVector3(0, 1, 0),
        UnityEngine.NewVector3(0, 1, 0),
        UnityEngine.NewVector3(0, 1, 0),
        
        -- Bottom face normals (pointing down)
        UnityEngine.NewVector3(0, -1, 0),
        UnityEngine.NewVector3(0, -1, 0),
        UnityEngine.NewVector3(0, -1, 0),
        UnityEngine.NewVector3(0, -1, 0)
    }
    
    -- Store original vertices positions
    originalVertices = {}
    for i = 1, #vertices do
        originalVertices[i] = UnityEngine.NewVector3(vertices[i].x, vertices[i].y, vertices[i].z)
    end
    
    -- Set the mesh data
    mesh.vertices = vertices
    mesh.triangles = triangles
    mesh.normals = normals

    -- Assign the created mesh instance, to both the mesh filter and mesh collider
    meshFilter.mesh = mesh
    meshCollider.sharedMesh = mesh
    
    print("Cube Mesh created and Wobble initialized successfully! Vertice Count: " .. tostring(#vertices))
    
end

function Update()
    if not mesh or not originalVertices then return end
    
    -- Update vertices using original positions
    for i = 1, #vertices do
        local originalVertex = originalVertices[i]
        
        -- Calculate wobble based on original position
        local wobble = math.sin(UnityEngine.Time.time * wobbleSpeed + originalVertex.x) * wobbleStrength
        
        -- Create new vertex position based on original position
        vertices[i] = UnityEngine.NewVector3(
            originalVertex.x,
            originalVertex.y + wobble,
            originalVertex.z
        )
    end
    
    -- Apply vertices to mesh
    mesh.vertices = vertices

    -- Force mesh collider to update
    -- We need to do this to force the collider to update with the mesh changes
    meshCollider.enabled = false
    meshCollider.enabled = true
end

```
