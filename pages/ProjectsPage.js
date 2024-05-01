import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigate, useParams } from 'react-router-native';
import NavBar from './NavBar';

const ProjectsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projects = [
        { id: 1, name: 'Project 1', description: 'NSC Events:', link: 'https://github.com/SeattleColleges/nsc-events-nextjs' },
        { id: 2, name: 'Project 2', description: 'Belindias Closet:', link: 'https://github.com/SeattleColleges/belindas-closet-nextjs' }
    ];

    const projectDetail = id ? projects.find(p => p.id.toString() === id) : null;

    return (
        <View style={styles.container}>
            <NavBar />
            {projectDetail ? (
                <View style={styles.detailView}>
                    <Text style={styles.title}>{projectDetail.name}</Text>
                    <Text style={styles.description}>{projectDetail.description}</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL(projectDetail.link)}>View Project on GitHub</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('/projects')}>
                        <Text style={styles.buttonText}>All Projects</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.listView}>
                    <Text style={styles.title}>All Projects</Text>
                    {projects.map((project) => (
                        <TouchableOpacity
                            key={project.id}
                            style={styles.button}
                            onPress={() => navigate(`/projects/${project.id}`)}>
                            <Text style={styles.buttonText}>{project.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5c80bd',
        alignItems: 'center',
        paddingTop: 120,
    },
    listView: {
        width: '100%',
        alignItems: 'center',
    },
    detailView: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        color: '#fff',
        marginBottom: 10,
    },
    description: {
        fontSize: 20,
        color: '#ccc',
        marginBottom: 5,
    },
    link: {
        fontSize: 18,
        color: '#add8e6',
        marginBottom: 20,
        textDecorationLine: 'underline'
    },
    button: {
        backgroundColor: '#0056b3',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
    },
});

export default ProjectsPage;
